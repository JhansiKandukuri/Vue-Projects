import { defineStore } from 'pinia'
export const usePiniaStore = defineStore('tasksStore',{
    state: () => ({
        heading: 'Pinia',
        tasks: [],
        loading: false     
    }),
    getters: {
            favs() {
                return this.tasks.filter(t => t.isFav)
            },
            favCount() {
                return this.tasks.reduce((acc,task) => task.isFav ? acc + 1 : acc , 0 )
            },
            totalCount : (state) => {
               return state.tasks.length
            }
    },
    actions: {
        async fetchTasks(){
            this.loading = true;
            try{
            const res = await fetch('http://localhost:8080/tasks');
            const data = await res.json();
            this.tasks = data;
            }catch(err){
                console.log(err);
            }finally{
                this.loading = false;
            }
        },
        async addNewTask(title){
            this.loading = true; 
            try{
                const newTask = {
                    id: Math.floor(Math.random() * 10000),
                    title:title,
                    isFav: false
                }
                const res = await fetch('http://localhost:8080/tasks',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newTask)
                });
            this.tasks.push(newTask);
                
            }catch(err){
                console.log(err);
            }finally{
                this.loading = false;   
                }
        },
        toggleFav(id){
           this.loading = true;
                try {
                    const task = this.tasks.find(t => t.id === id);
                    if(task){
                        task.isFav = !task.isFav;
                        fetch(`http://localhost:8080/tasks/${id}`,{
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({isFav: task.isFav})
                        })
                    }
                }catch(err){
                    console.log(err);
                }finally{
                    this.loading = false;
                }
        },
        deleteTask(id){
           this.loading = true;
              try{
                fetch(`http://localhost:8080/tasks/${id}`,{
                    method: 'DELETE'
                });
                this.tasks = this.tasks.filter(t => t.id !== id);
              }catch(err){
                console.log(err);
              }finally{
                this.loading = false;
              }
        }
    }
})
