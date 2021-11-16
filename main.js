var names_of_the_students=[];
function submit(){
 display_student_names=[];
 for(var i=1; i<=4; i++){
     var name=document.getElementById("name_of_the_student_"+i).value;
    names_of_the_students.push(name);
 }
 for(var j=0; j<names_of_the_students.length; j++){
     display_student_names.push("<h4>NAME - "+names_of_the_students[j]+"</h4>");
 }
 document.getElementById("display_name_with_commas").innerHTML=display_student_names;
 var remove_commas=display_student_names.join(" ");
 document.getElementById("display_name_without_commas").innerHTML=remove_commas;
 document.getElementById("submit_button").style.display="none";
 document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    names_of_the_students.sort();
    var display_student_names_new=[];
    for(var j=0; j<names_of_the_students.length; j++){
        display_student_names_new.push("<h4>NAME - "+names_of_the_students[j]+"</h4>");
    }
    var remove_commas=display_student_names_new.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    }