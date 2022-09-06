import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({
    cloud_name: 'dkbliyvln',
    api_key: '559143325757762',
    api_secret: 'CiGW8TIEhy6wgBOSbv6r7FW1Fis',
    secure: true
});

describe('Pruebas en fileUpload.js', () => {
    test('debe subir el archivo correctamente a cloudinary', async() => {
        const imageUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
        const response = await fetch( imageUrl );
        const blob = await response.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect(typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');
        
        const cloudResponse = await cloudinary.api.delete_resources([ 'journal-app/' + imageId ], {
            resource_type: 'image'
        });
    });

    test('debe de retornar null', async() => {
        const file = new File([], 'file.jpg');
        const url = await fileUpload(file);
        expect( url ).toBe(null);
    });
});
