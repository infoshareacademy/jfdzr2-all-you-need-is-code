import { useFormik } from 'formik';
import "../styles/ModalToCreatePost.css"
export default function ModalToCreatePost () {
    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            gender: 'male',
            comment: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return <>
    <div className="ModalCreatePost">
    <form className="ModalForm"onSubmit={formik.handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
        <h4>MyBoostedForm</h4>
        <label htmlFor="name">Name</label>
        <input id="name" value={formik.values.name} onChange={formik.handleChange}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={formik.values.age} onChange={formik.handleChange}/>
        <label htmlFor="gender">Gender</label>
        <select id="gender" value={formik.values.gender} onChange={formik.handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" value={formik.values.comment} onChange={formik.handleChange}/>
        <input type="submit" value="Wyślij"/>
    </form>
    </div>
    </>
}