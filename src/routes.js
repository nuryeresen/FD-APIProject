import Collection from './components/page/Collection';
import About from './components/page/About';
import Home from './components/page/Home';
import CollectionDetail from './components/page/CollectionDetail';
import SearchCollection from './components/page/SearchCollection';


 

const routes=[
    {title:"Home", path:"/", element: Home, isNav: true },
    {title:"Collection", path:"collection", element: Collection, isNav: true },
     {title:"CollectionDetail", path:"collection/:id", element: CollectionDetail, isNav: false },
    {title:"SearchCollection", path:"arama", element:SearchCollection, isNav: true },
    {title:"About", path:"About", element: About, isNav: true },
   
]


export default routes;