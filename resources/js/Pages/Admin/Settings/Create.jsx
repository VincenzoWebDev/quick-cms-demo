import Layout from "@/Layouts/Admin/Layout";
import { Link, useForm } from '@inertiajs/react';
import { InputErrors } from "@/components/Admin/Index";

const Create = () => {
    const { data, setData, post, errors, processing } = useForm({
        key: '',
        value: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('settings.store'));
    }

    return (
        <Layout>
            <h2>Inserisci una nuova impostazione</h2>
            <InputErrors errors={errors} />

            <div className="row">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="key">Chiave</label>
                            <input type="text" name="key" id="key" className="form-control" placeholder="Chiave" value={data.key} onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="value">Valore</label>
                            <input name="value" id="value" className="form-control" placeholder="Valore" value={data.value} onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <button className="btn cb-primary me-3" disabled={processing}>{processing ? 'In corso...' : 'Inserisci'}</button>
                            <Link href={route('settings.index')} className="btn btn-secondary">Torna indietro</Link>
                        </div>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </Layout>
    )
}
export default Create