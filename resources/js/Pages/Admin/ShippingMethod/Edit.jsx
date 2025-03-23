import Layout from "@/Layouts/Admin/Layout";
import { Link, useForm } from '@inertiajs/react';
import { InputErrors } from "@/components/Admin/Index";

const Edit = ({ shippingMethod }) => {
    const { data, setData, patch, errors, processing } = useForm({
        name: shippingMethod.name,
        description: shippingMethod.description,
        price: shippingMethod.price,
        delivery_time: shippingMethod.delivery_time,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route('shipping-methods.update', shippingMethod.id));
    }

    return (
        <Layout>
            <h2>Modifica spedizione</h2>
            <InputErrors errors={errors} />

            <div className="row">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="name">Nome</label>
                            <input type="text" name="name" id="name" className="form-control" placeholder="Nome spedizione" value={data.name} onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description">Descrizione</label>
                            <textarea name="description" id="description" className="form-control" placeholder="Descrizione" value={data.description} onChange={handleChange}></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="price">Prezzo</label>
                            <input type="number" name="price" id="price" className="form-control" placeholder="Prezzo" value={data.price} onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="delivery_time">Tempo consegna</label>
                            <input type="number" name="delivery_time" id="delivery_time" className="form-control" placeholder="Tempo consegna" value={data.delivery_time} onChange={handleChange} />
                            <small className="ms-1"><em>In giorni</em></small>
                        </div>

                        <div className="mb-3">
                            <button className="btn cb-primary me-3" disabled={processing}>{processing ? 'In corso...' : 'Modifica'}</button>
                            <Link href={route('shipping-methods.index')} className="btn btn-secondary">Torna indietro</Link>
                        </div>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </Layout>
    )
}
export default Edit