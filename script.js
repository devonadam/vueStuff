vueApp.innerHTML=`  <div>
        <div class="task">
          <input
            type="text"
            v-model="inputText"
          />
        </div>
        <p class='counter' @click="inc">{{counter}}</p>
        </div>`  

function appData() {
  return {
    counter:0,
    inputText:""
  };
}

function appMethods() {
  return {
    inc: function (task) {
      this.counter++;
    },
  };
}

let vApp=new Vue({
  el: "#vueApp",
  data: appData(),
  methods:appMethods(),
  computed:{
  }
});