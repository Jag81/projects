var notes="notes-data";
var note_table=$vm.module_list[notes].Table;
//-------------------------------------
m.set_req=function(){
    if(m.input!=undefined && m.input.record!=undefined){
        m.query={Table:m.Table,'Data.Participant_uid':m.input.record.UID.toString()}
    }
    else{
        m.query={Table:m.Table}
    }
};
//-------------------------------------
m.load=function(){
        if(m.input!=undefined && m.input.record!=undefined){
        $('#export_section__ID').hide();
    }
    else{
        $('#export_section__ID').show();
    }
}
//-------------------------------
m.export_records=function(){
    tabledata=m.Table;
    m.Table=$vm.module_list['participant-data'].Table;
    var participant_rec={};
    var req={cmd:"export",table:m.Table,I1:m.I1,search:$('#keyword__ID').val()}
    open_model__ID();
    $vm.request(req,function(N,i,txt){
        //console.log(i+"/"+N);
        $('#msg__ID').text((100*i/N).toFixed(0)+"%");
        if(i==-1){
            var len=txt.length;
            n_txt="["+txt.substring(5,len-9)+"]";
            participant_rec=JSON.parse(n_txt);
            console.log(JSON.stringify(participant_rec))
            //$vm.download_csv(m.Table+".csv",o);
            close_model__ID();
            m.Table=tabledata;
            var req={cmd:"export",table:m.Table,I1:m.I1,search:$('#keyword__ID').val()}
            open_model__ID();
            $vm.request(req,function(N,i,txt){
                //console.log("B"+i+"/"+N);
                $('#msg__ID').text((100*i/N).toFixed(0)+"%");
                if(i==-1){
                    var len=txt.length;
                    var data_rec="["+txt.substring(5,len-9)+"]";
                    var o=JSON.parse(data_rec);
                    var fields_ex=m.fields.replace("_Participant_ID","Participant_uid")
                    var export_fields=fields_ex.split(',');
                    //Order by m.fields
                    export_fields=export_fields.slice(4,export_fields.length-3);
                    var oo=JSON.parse(JSON.stringify(o,export_fields));
                    //Create an empty item so download.csv will create all headings
                    var item={}
                    for(var i=0;i<export_fields.length;i++){
                        item[export_fields[i]]="";
                    }
                    var output_data=[];
                    for(var i=0;i<participant_rec.length;i++){
                        for (var k=0;k<oo.length;k++){
                            if(oo[k].Participant_uid==participant_rec[i].ID){
                                output_data.push(oo[k]);
                                break;
                            }
                            if(k==oo.length-1) {item.Participant_uid=participant_rec[i].ID; output_data.push(item)}
                        }
                    }
                    var tmp=JSON.stringify(output_data).replace(/Participant_uid/g,"Participant ID")
                    output_data=JSON.parse(tmp);
                    //console.log(JSON.stringify(output_data))
                    $vm.download_csv(m.Table+".csv",output_data);
                    close_model__ID();
                }
            });
        }
    });
    
}
//-------------------------------------
m.cell_render=function(records,I,field,td){
    switch(field){
        case '_Status':
            td.html("<span style='color:"+records[I].Data['sysStatus']+"'>&#x25cf;</span>");
            td.css('text-align','center');
            break;
        case '_Participant_ID':
            td.html(records[I].Data.Participant_uid);
            break;
        case '_Notes':
            //default: create a hyperlink to load note module with task name and task UID
            //if there is a note for this record, the td will be overwritten lately
            td.html("<u style='cursor:pointer'>Notes</u>");
            td.find('u').on('click',function(){
                $vm.load_module(notes,'',{task_name:m.task_name,task_uid:records[I].UID,participant_uid:records[I].Data.Participant_uid})
            })
            break;
        case '_Lock':
            var lk=0; if(records[I].LK==1) lk=1;
            var       h="<u i="+I+" style='cursor:pointer;color:green;'><i class='fa fa-lock-open'></i></u>";
            if(lk==1) h="<u i="+I+" style='cursor:pointer;color:red;'><i class='fa fa-lock'></i></u>";
            td.html(h);
            td.css('text-align','center');
            td.find('u').on('click',function(){
                var _i=$(this).attr('i');
                process_lock(_i);
            })
            break;
    }
}
//-------------------------------------
m.data_process=function(){
    //get all notes for current grid view and render them
    //var notes="notes-data";
    var uid_array=[];
    for(var i=0;i<m.records.length;i++){
        uid_array.push(m.records[i].UID)
    }
    var query={ I2:m.task_name, I3: { $in: uid_array } }
    var req={cmd:"find",table:note_table,query:query}
    $vm.request(req,function(res){
        //--------------------------
        var part=[];
        //find the notes and attach to the record
        if(res.result.length!=undefined){
            for(var j=0;j<m.records.length;j++){
                for(var k=0;k<res.result.length;k++){
                    if(m.records[j].UID==res.result[k].I3){
                        m.records[j].sys_x=res.result[k].Data;
                        m.records[j].I4=res.result[k].I4;
                        break;
                    }
                }
            }
        }
        //-------------------------- ,participant_uid:records[index].Data.Participant_uid
        //rendering the notes;
        $("#grid__ID td[data-id=_Notes]").each(function(index){
            if(m.records[index].sys_x!=undefined){
                var t=m.records[index].sys_x.Title;
                var c=m.records[index].sys_x.Color
                $(this).html("<u style='cursor:pointer;color:"+c+"'>"+t+"</u>");
                $(this).find('u').on('click',function(){
                    $vm.load_module(notes,'',{task_name:m.task_name,task_uid:m.records[index].UID,participant_uid:m.records[index].Data.Participant_uid})
                })
            }
        });
        //--------------------------
    });
}
/*
m.cell_render=function(records,I,field,td){
    switch(field){
        case '_Status':
            td.html("<span style='color:"+records[I].Data['sysStatus']+"'>&#x25cf;</span>");
            break;
        case '_Participant_ID':
            td.html(records[I].Data.Participant_uid);
            break;
        case '_Notes':
            var notes='Notes';
            if(records[I].Notes!=undefined){
                var n1=records[I].Notes.split('\n')[0];
                //var n2=n1.split('\n').pop();
                if(n1.length>0){
                    notes=n1;
                    if(notes.length>10) notes=notes.substring(0,10)+"...";
                }
            }
            td.html("<u style='cursor:pointer'>"+notes+"</u>");
            td.find('u').on('click',function(){
                $vm.load_module('notes','',{record:records[I]});
            });
            break;
    }
}*/
//-------------------------------------
m.new=function(){
    if(m.form_module!=undefined){
        //we are using child panel
        var participant_record=$vm.vm['__ID'].input.record;
        $vm.load_module(m.form_module,'',{participant_record:participant_record,goback:1});
    }
}
//-------------------------------------    
var process_lock=function(I){
    var lk=0; if(m.records[I].LK==1) lk=1;
    var id=m.records[I]._id;    
    var to_do_lock=0; if(lk==0) to_do_lock=1;
    $vm.request({cmd:"lock",id:id,table:m.Table,lock:to_do_lock},function(res){
        //console.log(res)
        var $td=$('#grid__ID tr:nth-child('+(I+2)+')').find('td').eq(2);
        m.records[I].LK=to_do_lock;
        m.cell_render(m.records,I,'_Lock',$td);
    });

}//-------------------------------------
