import axios from 'axios'


export default new class TYPEDService{

    add(FORM){
        axios.post('typed/save',FORM).then(response => {
            console.log(response)
        })
    }
    async delete(id){
        await axios.delete('typed/delete/'+id).then(response => {
            console.log(response)
        })
    }
    async update(id,FORM){
        await axios.put('typed/update/'+id,FORM).then(response => {
            console.log(response)
        }) 
    }
    get(FORM){
        axios.post('typed/delete',FORM).then(response => {
            console.log(response)
        })
    }
    async getAll(){
        let rds = [];
        rds = await axios.get('type-d/all').then(response => {
            console.log(response)
            return response.data 
        }).catch(e => {
            console.log(e)
        })
        
        return rds
    }
}