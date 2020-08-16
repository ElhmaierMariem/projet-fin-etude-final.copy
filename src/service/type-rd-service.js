import axios from 'axios'


export default new class TypeRDSrevice{

    addRD(RD){
        axios.post('type-rd/save',RD).then(response => {
            console.log(response)
        })
    }
    deleteRD(RD){
        axios.post('rds/delete',RD).then(response => {
            console.log(response)
        })
    }
    updateRD(RD){
        axios.post('rds/delete',RD).then(response => {
            console.log(response)
        })
    }
    getRD(RD){
        axios.post('rds/delete',RD).then(response => {
            console.log(response)
        })
    }
    async getRDs(){
        let rds = [];
        rds = await axios.get('type-rd/').then(response => {
            return response.data
        })
        
        return rds
    }
}