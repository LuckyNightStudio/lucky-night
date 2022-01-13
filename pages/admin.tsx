import dynamic from 'next/dynamic';
import config from '../cms/config';

// @ts-ignore
const CMS = dynamic(() =>
        import('netlify-cms-app').then((cms) => {
            // @ts-ignore
            cms.init({ config });
        }),
    { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage: React.FC = () => {
    return <CMS />;
};

export default AdminPage;
