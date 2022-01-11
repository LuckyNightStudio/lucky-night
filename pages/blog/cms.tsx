import CMS from 'netlify-cms-app'
import {NextPage} from "next";

const Index: NextPage = () => {
    CMS.init()
    return (
        <p>Tester</p>
    )
}

export default Index
