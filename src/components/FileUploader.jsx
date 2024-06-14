import React, { useState } from 'react'

const FileUploader = () => {

    const [file, setFile] = useState(null)
    const filehandler = (e) => {
        const selectedFile = e.target.files[0]
        setFile(selectedFile)
    }

    return (
        <>
            <input type="file" accept='pdf' onChange={filehandler} />
            {file && <img src={URL.createObjectURL(file)} alt='uploaded' />}
        </>
    )
}

export default FileUploader