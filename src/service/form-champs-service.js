import axios from 'axios'


export default new class FORMCHAMPSService{

    add(FORMC){
        axios.post('form-champs/save',FORMC).then(response => {
            console.log(response)
        })
    }
    async delete(id){
        await axios.delete('form-champs/delete/'+id).then(response => {
            console.log(response)
        })
    }
    async update(id,FORMC){
        await axios.put('form-champs/update/'+id,FORMC).then(response => {
            console.log(response)
        })
    }
    get(FORMC){
        axios.post('form-champs/delete',FORMC).then(response => {
            console.log(response)
        })
    }
    async getAll(){
        let rds = [];
        rds = await axios.get('form-champs/all').then(response => {
            console.log(response)
            return response.data
        }).catch(e => {
            console.log(e)
        })
        
        return rds
    }
}