import { takeEvery, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions';
import ShopActionTypes from './shop.types';


export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }
}

    export function* fetchCollectionStart() {
    yield takeEvery (
        ShopActionTypes.FETCH_COLLECTION_START, 
        fetchCollectionAsync
        );
    }

export function* shopSagas() {
    yield all([
        call(fetchCollectionStart)
    ]);
}