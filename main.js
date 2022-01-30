menu_list_array = ["Veg Margherita Pizza", "Chicken Tandoori Pizza", "Chicken Cheese Delight", "BBQ Chicken Pizza", "Beef Pepperoni Pizza", "Crisp Capsicum & Fresh Tomato Pizza", "Double Cheese Margherita Pizza", "Jalapeno & Red Paprika Pizza", "Paneer Special Pizza", "Golden Corn Pizza."];

function show_menu()
{
var htmldata_showmenu;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata_showmenu=htmldata_showmenu+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata_showmenu;
}

function pizza_show(){
var htmldata_add_item;
var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        htmldata_add_item=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata_add_item=htmldata_add_item+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata_add_item;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	pizza_show();
}
