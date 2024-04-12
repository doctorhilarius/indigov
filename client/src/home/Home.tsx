import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div>
                <Link to={'/constituents/save'}>
                    Enter Constituent Information {'>>'}
                </Link>
            </div>
            <div>
                <Link to={'/constituents/download'}>
                    Download Constituent Information {'>>'}
                </Link>
            </div>
            <div>
                <Link to={'/constituents/list'}>List Constituents {'>>'}</Link>
            </div>
        </div>
    )
}
