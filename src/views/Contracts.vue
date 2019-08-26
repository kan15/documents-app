<template>
    <table class="table  table-hover general-table">
        <thead>
            <tr>
                <th> Номер договора</th>
                <th class="hidden-phone">Дата заключения</th>
                <th>Вид договора</th>
                <th>Сумма договора</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="contract in $store.state.contracts">
                <td><a href="#">{{contract.id}}</a></td>
                <td class="hidden-phone">{{contract.date}}</td>
                <td>{{contract.type}}</td>
                <td><span class="label label-info label-mini">{{contract.money}}</span></td>

                <router-link v-bind:to="{name: 'contract-form', params: {id: contract.id}}">
                    <td><button type="button" class="btn btn-info "><i class="fa fa-pencil"></i>Изменить</button></td>
                </router-link>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'Contracts'
}
</script>