export const uploadFile = async (file) => {
        // voy a llamar a la api la url 
        const apiCloud = 'https://api.cloudinary.com/v1_1/danimel/upload'
    
        const formData = new FormData();

        formData.append("upload_preset", "Frontend12");
        formData.append("file", file);

        const resp = await fetch(apiCloud, { 
            method: 'POST',
            body: formData
        });
        const data = await resp.json()
     
       return data.secure_url

          
    }