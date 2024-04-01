// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// buttonEl.addEventListener("click", ()=> {

//     const enterValue = inputEl.value;
//     const listItemEl = document.createElement("li");
//     listItemEl.textContent = enterValue;
//     listEl.append(listItemEl);
//     inputEl.value = "";

// });

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: '',
            error: "",
        }
    },

    methods: {
        addGoal() {
            if (this.enteredValue !== "") {

                this.goals.push(this.enteredValue);
                this.enteredValue = '';
                this.error = "";
            } else {
                this.error = "Please Enter your goal"
            }
        },
        deleteGoal(index) {
            this.goals.splice(index, 1);
        }
    }
}).mount("#app");
