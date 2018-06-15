 # Install vue-start-template-components with NPM:
```bash
git clone https://github.com/kostia7alania/vue-start-template-components.git

  cd vue-start-template-components # go to project folder
  npm i     # install dependencies

npm run dev # serve with hot reload at localhost:8080

npm run build # build for production with minification
```
For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

<img src="https://m.vk.com/doc-125614288_467706550">


# BASIC USAGE:

 ```bash
    <div id="app1"></div> 
    <div id="app2"></div> 
    <div id="app3"></div> 

      
    <script src="/dist/build.js"></script>

    <script> 
      props1 = {  selector: '#app1',   doc_id: 1  };
      props2 = {  selector: '#app2',   doc_id: 2  };
      props3 = {  selector: '#app3',   doc_id: 3  };
      goNewVue(props1);
      goNewVue(props2);
      goNewVue(props3); 
    </script>
