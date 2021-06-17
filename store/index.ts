// このファイルは基本編集しません。
import { Store } from 'vuex';
import { initialiseStores } from '@/plugins/store-accessor';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initializer = (store: Store<any>): void => initialiseStores(store);

export const plugins = [initializer];
export * from '@/plugins/store-accessor';
