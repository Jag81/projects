(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "document-data":	 	        {url:"$H/m/document-data.html",Table:"document-demo",form_module:"document-form",router:1},
        "document-form":	 	        {url:"$H/m/document-form.html",Table:"document-demo"},
        "document-page":	 	        {url:"$H/m/document-page.html",Table:"document-demo",router:1},
        "about-vmiis":  {url:"$H/m/about-vmiis.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
