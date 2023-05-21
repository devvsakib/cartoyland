import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useContext, useEffect } from 'react';
import API from '../lib/API';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../components/Common/PrimaryButton';
import { AuthContext } from '../contexts/AuthProvider'
import Layout from '../components/Layout'
import Swal from 'sweetalert2'
import { toast } from 'react-hot-toast';
import { FaEye, FaPen, FaTrash, FaTrashAlt } from 'react-icons/fa';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 350,
    width: 300,
    height: 600,
    overflow: 'scroll',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const columns = [
    { id: 'pictureUrl', label: 'Image', minWidth: 20 },
    { id: 'name', label: 'Name', minWidth: 70 },
    {
        id: 'subcategory',
        label: 'Subcategory',
        minWidth: 20,
        align: 'left',
    },
    {
        id: 'price',
        label: 'Price',
        minWidth: 10,
        align: 'left',
        sortable: true, // Add sortable property
    },
    {
        id: 'availableQuantity',
        label: 'Quantity',
        minWidth: 10,
        align: 'left',
    },
    {
        id: '',
        label: '',
        minWidth: 10,
        align: 'left',
    },
];

const MyToys = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [toys, setToys] = useState([])
    const [selectedToy, setSelectedToy] = useState(null);
    const [updatedToy, setUpdatedToy] = useState({});
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext)
    const [deleting, setDeleting] = useState(false)

    // Get all toys by email
    useEffect(() => {
        const getToys = async () => {
            try {
                const res = await API.getToysByEmail(user.email);
                setToys(res);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        getToys();
    }, []);

    // Delete toy
    const deleteToy = async (id) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                setDeleting(true)
                if (result.isConfirmed) {
                    fetch(`https://toymarketplaceapi.onrender.com/toys/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            setDeleting(false)
                            if (data.deletedCount) {
                                // Remove the deleted toy from the toys state
                                const remainingToys = toys.filter(toy => toy._id !== id);
                                setToys(remainingToys); // Update the state with the remaining toys
                                Swal.fire(
                                    'Deleted!',
                                    'Your toy has been deleted.',
                                    'success'
                                );
                            }
                        });
                }
            });

        } catch (error) { }

    };



    // Update toy details  
    const updateToyDetails = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);

        const toyData = {
            ...formValues,
        };
        try {
            await API.updateToy(selectedToy._id, toyData);
            // Handle successful update
            toast.success('Toy updated successfully!');
            handleClose();

            // Update the toys state with the new data
            const updatedToys = toys.map((toy) => {
                if (toy._id === selectedToy._id) {
                    return {
                        ...toy,
                        ...toyData,
                    };
                }
                return toy;
            });
            setToys(updatedToys);
        } catch (error) {
            console.error('Error updating toy:', error);
            toast.error('Failed to update toy. Please try again.');
        }
    };
    return (
        <div className='my-10'>
            <Layout>
                <h1 className="text-3xl mt-5 font-bold text-center mb-5">My Toys</h1>
                <div>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 540 }}>
                            <Table stickyHeader aria-label='sticky table'>
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        loading && (
                                            <TableRow>
                                                <TableCell colSpan={columns.length} align='center'>
                                                    <div className='w-full flex justify-center items-center my-10'>
                                                        <img className='w-16' src="/images/loading.gif" />
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ) ||
                                        toys?.map((toy, index) => (
                                            <TableRow key={index}>
                                                <TableCell><img className='w-20' src={toy.pictureUrl} alt='' /></TableCell>
                                                <TableCell>{toy.name}</TableCell>
                                                <TableCell>{toy.subcategory}</TableCell>
                                                <TableCell>{toy.price}</TableCell>
                                                <TableCell>{toy.availableQuantity}</TableCell>
                                                <TableCell>
                                                    <div className='flex items-center'>
                                                        <button className='px-2 hover:bg-accent hover:text-white py-1 text-lg text-accent flex items-center'>
                                                            <Link to={`/toy/${toy._id}`}>
                                                                <FaEye />
                                                            </Link>
                                                        </button>
                                                        <button className='px-2 hover:bg-accent hover:text-white py-1 text-lg text-accent flex items-center' onClick={() => { handleOpen(); setSelectedToy(toy) }}>
                                                            <FaPen />
                                                        </button>
                                                        <button className='px-2 hover:bg-accent hover:text-white py-1 text-lg text-accent flex items-center' onClick={() => deleteToy(toy._id)}>
                                                            <FaTrash />
                                                        </button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                    {toys &&
                                        (toys.length === 0 || toys.length === undefined) && (
                                            <TableRow>
                                                <TableCell colSpan={columns.length} align='center'>
                                                    No toys found.
                                                </TableCell>
                                            </TableRow>
                                        )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
                {/* MODAL */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {selectedToy?.name}
                        </Typography>
                        <form className='mx-auto grid gap-4' onSubmit={updateToyDetails}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Picture URL of the toy</span>
                                </label>
                                <label className="input-group">
                                    <input onChange={(e) => setUpdatedToy({ ...updatedToy, name: e.target.value })} defaultValue={selectedToy?.pictureUrl} type="text" name="pictureUrl" placeholder="Enter picture URL" className="input rounded-lg shadow-lg w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <label className="input-group">
                                    <input onChange={(e) => setUpdatedToy({ ...updatedToy, name: e.target.value })} defaultValue={selectedToy?.name} type="text" name="name" placeholder="Enter name" className="input rounded-lg shadow-lg w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub-category</span>
                                </label>
                                <label className="label">
                                    <select
                                        name="subcategory"
                                        className="select select-bordered rounded-lg w-full"
                                        defaultValue={selectedToy?.subcategory || ""}
                                    >
                                        <option value="">Select sub-category</option>
                                        <option value="Cars">Cars</option>
                                        <option value="Trucks">Trucks</option>
                                        <option value="Mini Trucks">Mini Trucks</option>
                                        <option value="Police Cars">Police Cars</option>
                                    </select>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <input onChange={(e) => setUpdatedToy({ ...updatedToy, name: e.target.value })} defaultValue={selectedToy?.price} type="text" name="price" placeholder="Enter price" className="input rounded-lg shadow-lg w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">
                                    <input onChange={(e) => setUpdatedToy({ ...updatedToy, name: e.target.value })} defaultValue={selectedToy?.rating} type="text" max={"5.0"} min={"1.0"} name="rating" placeholder="Enter rating" className="input rounded-lg shadow-lg w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available quantity</span>
                                </label>
                                <label className="input-group">
                                    <input onChange={(e) => setUpdatedToy({ ...updatedToy, name: e.target.value })} defaultValue={selectedToy?.availableQuantity} type="number" name="availableQuantity" placeholder="Enter available quantity" className="input rounded-lg shadow-lg w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail description</span>
                                </label>
                                <label className="label">
                                    <textarea name="detailDescription" defaultValue={selectedToy?.detailDescription} placeholder="Enter detail description" className="textarea textarea-bordered rounded-lg w-full" />
                                </label>
                            </div>
                            <button type='submit'>
                                <PrimaryButton text={'Update'} />
                            </button>
                        </form>
                    </Box>
                </Modal>
            </Layout >
        </div >
    )
}

export default MyToys