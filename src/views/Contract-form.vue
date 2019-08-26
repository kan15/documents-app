<template>
    <div class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title"></h4>                       
                </div>
                <div class="modal-body">
                    <label>Наименование: </label>
                    <input type="text" class="form-control">
                    <label> Статус: </label>
                    <select type="text" class="form-control">
                        <option value="active">active</option>
                        <option value="non-active">non-active</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button data-dismiss="modal" type="button" class="btn btn-primary">Сохранить изменения</button>
                    <button data-dismiss="modal" type="button" class="btn btn-default btn-danger">Закрыть</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'contract-form'
    }
</script>