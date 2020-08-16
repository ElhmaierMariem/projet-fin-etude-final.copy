import store from '@/store'
import axios from 'axios'

store.subscribe((mutation) => {
    // console.log(mutation)
    switch(mutation.type){
        case 'auth/setUser':
           if (mutation.payload){
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + mutation.payload.accessToken
                localStorage.setItem('user', JSON.stringify(mutation.payload))
           }else{
            axios.defaults.headers.common['Authorization'] = null
            // localStorage.removeItem('user')
           }
           break;
    }
})