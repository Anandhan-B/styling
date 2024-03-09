
$(document).ready(function () {
    $(`.date`).change(function(){
        $(this).parent().find(`.save`).css('display','inline')
        console.log(this.value);
    })
    $(`.form-table`).on('click','.edit',function(e){
        const id = $(this).parent().parent().find('.id').html();
        window.location.href = `/form/edit/${id}`
    })
    $(`.form-table`).on('click','.delete',function(e){
        const id = $(this).parent().parent().find('.id').html();
        $.ajax({
            url: `/api/v1/form/del/${id}`,
            type: 'delete',
            headers: {
              'Content-Type': 'application/json',
            },
            success: function (response) {
                $(this).parent().parent().remove()
                alert('success')
            },
            error: function (xhr, status, error) {
                
                alert("Server Error")
            }
          });
    })

});