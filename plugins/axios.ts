import { Context } from '@nuxt/types';
import { AxiosError } from 'axios';

export default function ({ $axios, error }: Context): void {
  // $axios.onRequest(() => {});

  /**
   * NOTE:
   * エラーハンドリング
   * response error => request error => error before request
   * の順番で処理
   * https://github.com/axios/axios#handling-errors
   */
  $axios.onError((e: AxiosError): Promise<never> | void => {
    if (e.response) {
      const { status, statusText } = e.response;
      // const { message } = e.response.data;

      /**
       * NOTE:
       * バリデーションエラー以外はエラーページに redirect する
       * バリデーションの処理が複雑なため、422のみ各ロジックファイルでハンドリングする
       */
      if (status !== 422)
        return error({ statusCode: status, message: statusText });

      // NOTE: 万が一statusが存在しなかった場合はrejectを返す
      return Promise.reject(e);
    }

    if (e.request) {
      const { status, statusText } = e.request;
      return error({
        statusCode: status,
        message: statusText,
      });
    }

    return Promise.reject(e);
  });
}
