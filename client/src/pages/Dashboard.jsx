import { useSearchParams } from 'react-router-dom';
import OwnerCount from '../Admin/OwnerCount.jsx';
import ShopCount from '../Admin/ShopCount.jsx';
import UserCount from '../Admin/UserCount.jsx';
import OwnerApproval from '../admin/OwnerApproval.jsx';

export default function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams({ view: '' });
  const tabView = searchParams.get('view');

  return (
    <div className="max-w-full mx-auto">
      <section id="cards" className="m-10 flex flex-col lg:flex-row gap-10">
        <div className="card w-full bg-gradient-to-r from-blue-400 to-blue-950 image-full">
          {/* <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure> */}
          <div className="card-body">
            <h2 className="card-title">Pending Owner</h2>
            <p className="font-bold text-4xl text-white">35</p>
            <div className="card-actions justify-end">
              <button
                className="btn primary-btn px-10 rounded-full border-0"
                onClick={() =>
                  setSearchParams(
                    (prev) => {
                      prev.set('view', 'viewApprovals');
                      return prev;
                    },
                    { replace: true }
                  )
                }
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-gradient-to-r from-blue-400 to-blue-950 image-full">
          {/* <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure> */}
          <div className="card-body">
            <h2 className="card-title">Approved Owners</h2>
            <p className="font-bold text-4xl text-white">65</p>
            <div className="card-actions justify-end">
              <button
                className="btn primary-btn px-10 rounded-full border-0"
                onClick={() =>
                  setSearchParams(
                    (prev) => {
                      prev.set('view', 'viewOwners');
                      return prev;
                    },
                    { replace: true }
                  )
                }
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-gradient-to-r from-blue-400 to-blue-950 image-full">
          {/* <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure> */}
          <div className="card-body">
            <h2 className="card-title">Shops</h2>
            <p className="font-bold text-4xl text-white">65</p>
            <div className="card-actions justify-end">
              <button
                className="btn primary-btn px-10 rounded-full border-0"
                onClick={() =>
                  setSearchParams(
                    (prev) => {
                      prev.set('view', 'viewShops');
                      return prev;
                    },
                    { replace: true }
                  )
                }
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-gradient-to-r from-blue-400 to-blue-950 image-full">
          {/* <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure> */}
          <div className="card-body">
            <h2 className="card-title">Users</h2>
            <p className="font-bold text-4xl text-white">100</p>
            <div className="card-actions justify-end">
              <button
                className="btn primary-btn px-10 rounded-full border-0"
                onClick={() =>
                  setSearchParams(
                    (prev) => {
                      prev.set('view', 'viewUsers');
                      return prev;
                    },
                    { replace: true }
                  )
                }
              >
                View
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="views">
        <div className="max-w-full">
          {tabView === 'viewApprovals' ? (
            <OwnerApproval />
          ) : tabView === 'viewOwners' ? (
            <OwnerCount />
          ) : tabView === 'viewShops' ? (
            <ShopCount />
          ) : tabView === 'viewUsers' ? (
            <UserCount />
          ) : (
            ''
          )}
        </div>
      </section>
    </div>
  );
}
