import React, { useEffect, useState, useContext } from 'react'
// import { GlobalState } from '../GlobalState'
import axios from 'axios'
import "./CreateCategory.css"

function CreateCategory() {

    const [categoryName, setCategoryName] = useState('')

    const handleCreate = async e => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3001/api/category', {
                name: categoryName
            })
            alert(`Created ${categoryName} Category Successfully`)
            setCategoryName('')
        } catch (err) {
            alert(err.response.data.msg)
        }

    }

    const handleChangeInput = e => {
        setCategoryName(e.target.value)
    }


    return (
        <div className="CreateCategoryDiv">

            <div class="container-fluid">
                <form className="d-flex" onSubmit={handleCreate}>

                    <label htmlFor="name">CategoryName</label>
                    <input className="form-control me-2" type="text" name="name" id="name" required
                        value={categoryName} onChange={handleChangeInput} />

                    <button className="btn btn-outline-success" type="submit">Create Category</button>
                </form>
            </div>

        </div>
    )
}

export default CreateCategory
