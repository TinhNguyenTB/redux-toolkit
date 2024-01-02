
const FormAddNew = () => {
    return (
        <form className="container ">
            <div class="mb-3 col-8">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control" />
            </div>
            <div class="mb-3 col-8">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" />
            </div>
            <div class="mb-3 col-8">
                <label class="form-label">Username</label>
                <input type="text" class="form-control" />
            </div>

            <button type="submit" class="btn btn-primary">Create</button>
        </form>

    )
}

export default FormAddNew;