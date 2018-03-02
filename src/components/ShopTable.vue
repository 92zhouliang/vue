<template>
<div>
    <Table border :columns="shopColumns" :data="shopData"></Table>
    <p>商品总量：{{totalNum}}</p>
    <p>商品总价：{{totalPrice}}<span v-if="totalPrice>0">元</span></p>
</div>
    
    
</template>
<script>
    export default {
        name:'shop-table',
        data () {
            return {
                shopColumns: [
                    {
                        title:'商品id',
                        key:'id'
                    },
                    {
                        title:'商品名称',
                        key:'tradeName'
                    },
                    {
                        title:'单价(元)',
                        key:'unit'
                    },
                    {
                        title:'数量(个)',
                        key:'number',
                    },
                    {
                        title:'总价(元)',
                        key:'total',
                    },
                    {
                        title:'商品操作',
                        key:'actions',
                        render:(h,params)=>{
                        return h('div',[
                                h('Button',{
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.addProduct(params.row);
                                        }
                                    }
                                },'+'),
                                h('Button',{
                                    props: {
                                        type: 'error',
                                        size: 'small',
                                        loading:params.number>1?true:false
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.reduceProduct(params.row)
                                        }
                                    }
                                }
                                ,'-')
                            ])
                        }
                    }
                ],
                shopData: [
                    {   
                        id:11,
                        tradeName:'土豆丝',
                        unit:3,
                        number:0,
                        total:0
                    },
                    {
                        id:12,
                        tradeName:'酸辣土豆丝',
                        unit:5,
                        number:0,
                        total:0
                    },
                    {
                        id:13,
                        tradeName:'金针菇土豆丝',
                        unit:6,
                        number:0,
                        total:0
                    }
                ]
            }
        },
        methods: {
            addProduct(row){//添加商品并计算对应价格
                console.log(row);
                this.shopData.forEach((data,index)=>{
                    if(data.id===row.id){
                    this.shopData[index].number+=1;
                    this.shopData[index].total=this.shopData[index].unit*this.shopData[index].number;
                    }
                })
                
            },
            reduceProduct(row){//减少购买量
                this.shopData.forEach((data,index)=>{
                    if(data.id===row.id){
                        if(this.shopData[index].number>0){
                            this.shopData[index].number-=1;
                            this.shopData[index].total=this.shopData[index].unit*this.shopData[index].number;
                        }else if(this.shopData[index].number===0){
                            this.$Message.error('无法继续删减该商品')
                        }
                    
                    }
                })
                
            }
        },
        computed:{
            'totalNum':function(){//初始化商品总量
                let num=0;
                this.$data.shopData.forEach((data,index)=>{
                    num+=data.number;
                })
                return num;
            },
            'totalPrice':function(){//初始化商品总价
                let list = this.$data.shopData,total_price=0;
                list.forEach((data,index)=>{
                    total_price+=data.unit*data.number;
                })
                return total_price;
            }
        }
    }
</script>
