import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { crearTarea } from '../features/tareas/tareaSlice'

const TareaForm = () => {

    const [description, setDescripcion] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(crearTarea({ description }))
        setDescripcion('')
    }

    return (
        <>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="description">Descripción:</label>
                        <input
                            type="text"
                            name="description"
                            id="description"
                            value={description}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button type='submit' className="btn btn-block">Crear Tarea</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default TareaForm