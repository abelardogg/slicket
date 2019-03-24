(function($){
    'use strict'

    window.slicket = {};
    var slicket = window.slicket;

    var standardListItemForm = 
    `
    <div class="col-12 row shop-list-form">
    
        <div class="col-2 remove-item">
            <button type="button" class="btn btn-outline-danger">Remove</button>
        </div>

        <div class="col-5 form-group">
            <input type="text" class="form-control" placeholder="product (optional)">
        </div>
        
        <div class="col-3 form-group">
            <input type="number" class="form-control" placeholder="price*" value="0.0">
        </div>
        
        <div class="col-2 form-group">
            <div class="input-group mb-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">X</div>
                </div>
                <input type="number" class="form-control" placeholder="quantity*" value="1">
            </div>
        </div>
    </div>
    `;

    $(document).ready(function(){
        $('#add-item').on('click', function(e){
           $('#shop-list').append($(standardListItemForm));
        });
    
        $('#shop-list .remove-item').on('click', function(e){
            $(this).parent('.shop-list-form').remove();
         });

    });
    
    

}(jQuery));

