function closetopTabs(me) {
  var a = $(me).data('trigger');
  if ($('.'+a).is(":visible") == true)
  {
    $('.'+a).slideToggle();

  }else{
    $('.toptabs').fadeOut();
    $('.'+a).slideToggle();
  }
}


function clickA(me){$(me).find('a')[0].click();}

var myStr = "";
function fixcamelcase(me, _case, field){
  $('.'+me).each(function(index){
    if (field == "placeholder"){
         myStr = $(this).attr('placeholder');
      }else{
         myStr = $(this).text();
      }
    if (_case == "upper"){
      myStr = myStr.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase();
    }else if (_case == "lower"){
      myStr = myStr.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
    }else{
      myStr = myStr.replace(/([a-z])([A-Z])/g, '$1 $2');
    }
    if (field == "placeholder"){
      $(this).attr('placeholder', 'Search ' + myStr + ' list');
    }else{
      $(this).text(myStr);
    }
  });

}



function fixcamelcase_(me){
    myStr = $(me).attr('href').replace(/([a-z])([A-Z])/g, '$1_$2');
    return myStr;
}

function floattableHeader(me){
  var $table = $(me);
  $table.floatThead({
    responsiveContainer: function($table){
        return $table.closest('.main-content');
    },
    top: 65,
  });
}

function setHomeTabs(me, container, extclass){
  arrayLength = me.length;
  var content = "";
  var modifiedname ="";
  var withribbon ="";
  var lowercase_name = "";
  var tooltip = "";
  var name;
  var url;
  var icon;
  var cat;
  for (i = 0; i < arrayLength; i++) {
    var name = me[i].name;
    lowercase_name = name.toLowerCase();
    var url = me[i].url;
    var icon = me[i].icon;
    var cat = me[i].cat;
    var tooltip = me[i].tooltip;

    if (url == '') {
      url = '/admin/'+lowercase_name+'/';
    }
    if (icon == '') {
      icon = '/static/assets/admin/images/icons/'+lowercase_name+'.png';
    }

    if (cat.indexOf('inv')>=0){
      withribbon = '<div class="ribbon-wrapper"><div class="ribbon roboto-regular">Inventory</div></div>';
    }else{
      withribbon = "";
    }

    // for (x=0; x < arrayTooltip.length; x++){
    //   if (arrayTooltip[x].split(':')[0] == modifiedname){
    //     tooltip = arrayTooltip[x].split(':')[1];
    //   }
    // }
    content += '<div id="model-' + lowercase_name + '" class="'+extclass+'">';
    content += '  <a class="no-style" href="'+url+'">';
    content += '  <center>';
    content += '    <div class="pop_itemHV defaultmargin container-fluid hvr-grow col-md-12" style="width:100%;" >';
    content += withribbon;
    content += '      <center><br>';
    content += '        <img src="'+icon+'"';
    if (tooltip != ""){
      content += '           data-toggle="tooltip" data-placement="top" title="'+tooltip+'" >';
    } else {
      content += '>';
    }
    content += '      </center>';
    content += '      <h5 class="bold  capitalized admin_font">';
    content += '        <center>';
    content += '          <span class="camelcaseFix">'+name+'</span>';
    content += '        </center>';
    content += '      </h5>';
    content += '      <br>';
    content += '    </div>';
    content += '  </center>';
    content += '  </a>';
    content += '</div>';
  }
  $(container).html(content);
}


function setHeaderTabs(me, container, extclass){
  arrayLength = me.length;
  var content = "";
  var modifiedname ="";
  var lowercase_name = "";
  for (i = 0; i < arrayLength; i++) {
  if(me[i].search("Lang") >= 0){
      modifiedname = me[i];
    }
    else{
      modifiedname = me[i];
    }
  lowercase_name = me[i].toLowerCase();

    content += '<div class="'+extclass+' hvr-grow" >';
    content += '  <a class="no-style" href="/admin/'+lowercase_name+'/">';
    content += '    <div class="pop_itemHVsmall defaultmarginSm admin_font">';
    content += '      <center>';
    content += '        <img src="/static/assets/admin/images/icons/small/'+me[i].toLowerCase()+'.png"';
    content += '      </center>';
    // content += '      <p class="capitalized ">';
    content += '        <center>';
    content += '          <span class="camelcaseFix">'+modifiedname+'</span>';
    content += '        </center>';
    // content += '      </p>';
    content += '    </div>';
    content += '  </a>';
    content += '</div>';
  }
  $(container).html(content);
}


function searchHome(me){
  $(me).on("keyup", function(e){
    var q = $("#search").val().toLowerCase();
    // console.log(q);

    if (q == "") {
      arrayVariable.forEach(function(v,i){
        $("#model-" + v.name.toLowerCase()).fadeIn();
      });
    } else {
      arrayVariable.forEach(function(v,i){
        //console.log(v.toLowerCase() + " - " + v.toLowerCase().indexOf(q))
        if (v.name.toLowerCase().indexOf(q) == -1) {
          if ($("#model-" + v.name.toLowerCase()).find('a').find('.pop_itemHV').find('.ribbon-wrapper').find('.ribbon').text().toLowerCase().indexOf(q) == -1){
            $("#model-" + v.name.toLowerCase()).fadeOut();
          }else{
            $("#model-" + v.name.toLowerCase()).fadeIn();
          }
        } else {
          $("#model-" + v.name.toLowerCase()).fadeIn();
        }
      });
    }
  });
}





function searchTable(table, search){
  (function(win, doc){
         "using strict";
         var searchfield = doc.getElementById(search),
             tablebody = doc.getElementById(table).tBodies[0];


searchfield.onkeyup = function(e){
             var val   = this.value.toLowerCase(),
                 rows  = tablebody.rows,
                 row   = null,
                 r     = 0,
                 cells = null,
                 cell  = null,
                 c     = 0,
                 match = false;

             for (; row = rows[r ++];) {
                 cells = row.cells;
                 match = false;
                 for (c = 0; cell = cells[c ++];) {
                     if ((cell.innerHTML+"").toString().toLowerCase().indexOf(val) > -1) {
                         match = true;
                         break;
                     }
                 }
                 row.style.display = match ? "table-row" : "none";



             }
         }
         })(window, document);
}





function tableOrder (me, type){
  if (type == "ID"){
    var res = me.text().split(":");
    me.text(res[0]);
    var url = fixcamelcase_(me).split("%3a_");
    var a = url[0].split("=");
    var b = me.attr("href").split("&"); //RESERVED FOR PAGE HANDLE
    var c = a[0]+"="+url[1];
    return c;
  }
  if (type == "fKey"){
    var res = me.text().split(":");
    me.text(res[0]);
    var url = fixcamelcase_(me).split("%3a_");
    var a = url[0].split("=");
    var b = me.attr("href").split("&"); //RESERVED FOR PAGE HANDLE
    var c = a[0]+"="+a[1]+"_"+url[1];
    return c;
  }else{

  }
}


function paginator(container_id, page_count){
      if (page_count <= 1) {
        return;
      }

      var win = window,
          doc = document,
          url = win.location.toString(),

          params = (function(){
            var tmp = win.location.search;
            if (tmp && tmp.length > 0) {
              tmp = tmp.substr(1).split("&");
            } else {
              tmp = [];
            }
            return tmp;
          })(),

          new_url = (function(){
            var param = null,
                len = params.length,
                found = false,
                i = 0;

            for (; i < len; i ++) {
              param = params[i];
              if (param.indexOf("p=") !== -1) {
                params[i] = "p=";
                found = true;
                break;
              }
            }

            if (!found) {
              params.push("p=");
            }

            return win.location.pathname + "?" + params.join("&");
          })(),

          p = (function(){
            var p = 1;
            if (url.search("p=") !== -1) {
              p = parseInt(url.split("p=")[1]);

              if (p >= page_count) {
                p = page_count;
              } else if (p < 1) {
                p = 1;
              }
            }

            return p;
          })(),
          pages = [],
          max_page = 10,
          mid_base = Math.ceil(max_page / 2),
          fp = 1,
          lp = page_count,
          sp = p <= mid_base ? fp : p - mid_base,
          ep = sp + (max_page - 1),
          i = 0;

        if (ep > lp) {
            ep = lp;
            sp = lp - (max_page - 1);
        }

        // console.log(p);
        // console.log(sp);
        // console.log(ep);
        // console.log(lp);
        // console.log(mid_base);

        if (p === fp) {
          pages.push("<li><span class='selected_page_btn'>&lt;&lt;</span></li>");
          pages.push("<li><span class='selected_page_btn'>&lt;</span></li>");
        } else {
          pages.push("<li><a href='" + new_url + "1' class='hvr-grow camelcasefixPagination'>&lt;&lt;</a></li>");
          pages.push("<li><a href='" + new_url + (p - 1) + "' class='hvr-grow camelcasefixPagination'>&lt;</a></li>");
        }

        for (i = sp; i <= ep; i ++) {
          if (i === p) {
            pages.push("<li><span class='selected_page_btn'>" + i + "</span></li>");
          } else {
            pages.push("<li><a href='" + new_url + i + "' class='hvr-grow camelcasefixPagination'>" + i + "</a></li>");
          }
        }

        if (p == lp) {
          pages.push("<li><span class='selected_page_btn'>&gt;</span></li>");
          pages.push("<li><span class='selected_page_btn'>&gt;&gt;</span></li>");
        } else {
          pages.push("<li><a href='" + new_url + (p + 1) + "' class='hvr-grow camelcasefixPagination'>&gt;</a></li>");
          pages.push("<li><a href='" + new_url + lp + "' class='hvr-grow camelcasefixPagination'>&gt;&gt;</a></li>");
        }

    $("#" + container_id).html(pages.join(""));
}

function paginatorx(container, pages,schemaname){

  var paginator_content = "",
      max_page_no = 20,
      limit = pages > max_page_no ? max_page_no : pages;

  if (pages > 1){

    for (i = 1; i <= limit; i ++) {
      if (i == 1) {
        paginator_content += '  <li ><a class="selected_page_btn hvr-grow camelcasefixPagination" href="' + schemaname + '">'+i+'</a></li>';
      } else {
        paginator_content += '  <li ><a class="hvr-grow camelcasefixPagination" href="' + schemaname + '">' + i + '</a></li>';
      }

    }

    $('#'+container).html(paginator_content);
  }
}


function fixcamelcase_pagination(me){
  return;

  var x = 1;
  var url = window.location.search;
  var page = 0;
  if (url.search('p=') >= 0){
    var page = url.split("p=")[1];
    // console.log(page);
    $('.'+me).removeClass('selected_page_btn');
  }
  $('.'+me).each(function(index){
      if (page >= 1){
        if (page == x){
          $(this).addClass('selected_page_btn');
        }
      }

      if (url.indexOf("o") >= 0){
      if (url.indexOf("&p") >= 0){
        // console.log(url);
        var updated = url.replace('&p='+page,'&p=' + x)
        myStr = updated;
      }else{
        myStr = '/admin/'+ $(this).attr('href').toLowerCase() + '/'+ url+'&p=' + x;
      }
      }else{
        myStr = '/admin/'+ $(this).attr('href').toLowerCase() + '/?p=' + x;
      }



      $(this).attr('href',myStr);
      x++;

  });

}


function check_all(me, list){
  $('#'+me).click(function(){
    if ($('#'+me).prop('checked') == true){
      $('.'+list).prop('checked', true);
    }else {
      $('.'+list).prop('checked', false);
    }
  });
};


function trigger_hash(me){
  $('.'+me).each(function(index){
    $(this).click(function(){
        window.location.hash = $(this).attr('href');
    });
  });
};

function BuildDeleteList(me){
  var a = $('.'+me);
  var listID = "";
  var list_container_listID = "";
  var _id = [];
  var x = 0;
  a.each(function(index){
    if ($(this).prop('checked')==true){
       _id = $(this).closest('tr').find('td.search.pointer.Row_id').data('id');
       _name = $(this).closest('tr').find('td.search.pointer.Row_id').find('a').text();
       if (x == 0){
         listID = _id;
         list_container_listID = _name;
       }else{
         listID += ','+_id;
         list_container_listID += '<br>'+_name;
       }
       x++;
    };
    $('#listID').val(listID);
    $('#list_container_listID').html(list_container_listID);
    $('#Deletemodal').modal('show');
  });
};

var categoryList = []
function selectedMenuCategory(me){

  if ($(me).hasClass('selectedMenuCat'))
  {
    $(me).removeClass('selectedMenuCat');
    console.log($(me).find('center').find('h3').find('input'));
    $(me).find('center').find('h3').find('i').remove()
    $(me).find('center').find('h3').html("<i class='fa fa-square-o'></i>"+$(me).find('center').find('h3').html());
    categoryList.splice(categoryList.indexOf($(me).find('center').find('h3').find("input").attr("name")),1);
    $(".category-list").find("option[value='"+$(me).find('center').find('h3').find("input").attr("name")+"']").remove();
    $(me).find('center').find('h3').find("input").prop('checked',false);
    //updateCategories();


  }else{
    $(me).addClass('selectedMenuCat');
    console.log($(me).find('center').find('h3').find('input'));
    $(me).find('center').find('h3').find('i').remove()
    $(me).find('center').find('h3').html("<i class='fa fa-check-square-o'></i>"+$(me).find('center').find('h3').html());
    categoryList.push($(me).find('center').find('h3').find("input").attr("name"));
    $(".category-list").append("<option value='"+$(me).find('center').find('h3').find("input").attr("name")+"'>"+$(me).find('center').find('h3').find("input").attr("name")+"</i>");
    $(me).find('center').find('h3').find("input").prop('checked',true);
    //updateCategories();

  }
}

function updateCategories(me){
  $(".category-list").html=""
  for(i=0; i<categoryList.length;i++) {
    $(".category-list").append("<option value='"+categoryList[i]+"'>"+categoryList[i]+"</i>");
  }
}

function update_inline(me){
  $('#'+me).val(window.location.hash.split('#')[1]);
  // console.log(window.location.hash.split('#')[1]);
}


function loading(){
  $("#page_loader").jRoll({
              radius: 200,
    animation: "squares"
          });
}


function show_loading(){
  $('#page_loader').fadeIn();
  $('#page_loaderTitle').fadeIn();
  $('#page_loader_container').fadeIn();
}
function hide_loading(duration){
  setTimeout(function(){
  $('#page_loader').stop().fadeOut();
  $('#page_loaderTitle').stop().fadeOut();
  $('#page_loader_container').stop().fadeOut();
  }, duration);
}

$.get("/setdt/?t=" + Math.floor(Date.now() / 1000), function(){});