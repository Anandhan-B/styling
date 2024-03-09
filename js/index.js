
$(document).ready(function () {
    $(`.form-table`).on('click','.view',function(e){
        const id = $(this).parent().parent().find('.id').html();
        window.location.href = `/form/view/${id}`
    })
    /* $.ajax({
        url: '/api/v1/form/all',
        type: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        success: function (response) {

            response.reverse().map(form => {
                const id = form.id
                 const row = $(` <tr class="t-row" id="t-t-row-${id}">
                         <th class="id" scope="row">${id}</th>
                        <td class="f-name">${form.title}</td>
                       <td class="view"><a href="#"><button class="btn btn-success" id="t-t-view-${id}">View</button></a></td>
                    </tr>`);
                 $(`#today-table-body`).append(row)
            });
        },
        error: function (xhr, status, error) {
          
            alert("Server Error")
        }
      }); */
});