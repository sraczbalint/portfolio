import React,{ useEffect} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';


import CollectionPageContainer from '../collection/collection.container';
import collectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';


const ShopPage = ({fetchCollectionStart, match}) => {
    useEffect(() => {
        fetchCollectionStart();
    },[fetchCollectionStart])

        return (
            <div className='shop-page'>
            <Route exact path={`${match.path}`} component={collectionsOverviewComponent} />
            <Route
              path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
          </div>
        );
    }

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);