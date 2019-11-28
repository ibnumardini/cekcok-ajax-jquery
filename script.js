$('#tombol').on('click', function () {
    // Ngeget data dengan method get
    // $.get("data.txt",
    //     function (data, textStatus, jqXHR) {
    //         $('#data').text(data)
    //     },
    //     "text"
    // );

    $.ajax({
        type: "get",
        url: "data.txt",
        // data: "data",
        dataType: "text",
        success: function (data) {
            $('#data').text(data)
        }
    });
});