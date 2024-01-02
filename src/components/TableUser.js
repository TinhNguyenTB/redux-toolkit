import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllUsers } from '../redux/slices/userSlice';


function TableUser() {
    const dispatch = useDispatch();

    const listUsers = useSelector((state) => state.user.listUsers)
    const isLoading = useSelector((state) => state.user.isLoading)
    const isError = useSelector((state) => state.user.isError)

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [])

    if (isError === true && isLoading === false) {
        return (
            <div>Something wrongs, please try again!</div>
        )
    }

    if (isError === false && isLoading === true) {
        return (
            <div>Loading data...</div>
        )
    }

    return (
        <div className='container'>
            <table className='table table-hover table-bordered'>
                <thead className='table-success'>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    );
}

export default TableUser;
