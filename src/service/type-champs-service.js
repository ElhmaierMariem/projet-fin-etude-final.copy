import axios from 'axios'


export default new class TYPECHAMPSService{

    add(FORM){
        axios.post('type-champs/save',FORM).then(response => {
            console.log(response)
        })
    }
    async delete(id){
        await axios.delete('type-champs/delete/'+id).then(response => {
            console.log(response)
        })
    }
    async update(id,FORM){
        await axios.put('type-champs/update/'+id,FORM).then(response => {
            console.log(response)
        })
    }
    get(FORM){
        axios.post('type-champs/delete',FORM).then(response => {
            console.log(response)
        })
    }
    async getAll(){
        let rds = [];
        rds = await axios.get('type-champs/all').then(response => {
            console.log(response)
            return response.data
        }).catch(e => {
            console.log(e)
        })
        
        return rds
    }
}