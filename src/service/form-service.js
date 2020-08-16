import axios from 'axios'


export default new class FORMService{

    add(credentials){
        axios.post('form/save',credentials).then(response => {
            console.log(response)
        })
    }
    async delete(id){
        await axios.delete('form/delete/'+id).then(response => {
            console.log(response)
        })
    }
    async update(id,credentials){
        await axios.put('form/update/'+id,credentials).then(response => {
            console.log(response)
        })
    }
    get(credentials){
        axios.post('form/delete',credentials).then(response => {
            console.log(response)
        })
    }
    async getAll(){
        let credentials = [];
        credentials = await axios.get('form/all').then(response => {
            console.log(response)
            return response.data
        }).catch(e => {
            console.log(e)
        })
        
        return credentials
    }
}