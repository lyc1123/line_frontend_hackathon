<template>
<div>
     <a class="bt" @click="bill">
        <img src="@/assets/bill.png">
    </a>
    <vue-fab icon="receipt_long" mainBtnColor="#3599DB" @clickMainBtn="bill">
    </vue-fab>
    <div id="map" class="map">
        <gmap-map style="width: 375px; height: 812px;" :options="{minZoom: 8, maxZoom: 18}" :center="Mycoordinates" :zoom="12" ref="mapRef">
            <gmap-marker :position="{lat:Mapcoordinates.lat,lng:Mapcoordinates.lng}" :clickable="true" :draggable="false" :icon="markerOptions" label="Create!!" color="blue" @click="createAlbum">
            </gmap-marker>
            <!-- v-if 的statement (check status  create if(成功) else 不顯示marker )-->
            <gmap-marker v-for="(m,index) in markers" :key="index" :label="m.label" :position="m.position" :clickable="true" :draggable="false" :icon="markerOptions" @click="getImagesRes">
            </gmap-marker>
        </gmap-map>
    </div>
</div>
</template>

<script>
import GmapCustomMarker from 'vue2-gmap-custom-marker'

//need project id
//need status 成功 or null
//need place Zoom到該區塊

//post project id
//post 經緯度、place

export default {
    name: "GoogleMap",
    props:{
        projectId: String,
        place: String,
        position: Object
    },
    data() {
        const mapMarker = require('@/assets/cutePeople_icon2.png');
        return {
            friend_list:null,
            mapLatlng:{
                新北: {lng: 121.6739, lat: 24.91571},
                高雄: {lng: 120.666, lat: 23.01087},
                臺中: {lng: 120.67679, lat: 24.13595},
                臺北: {lng: 121.5598, lat: 25.09108},
                桃園: {lng: 121.2168, lat: 24.93759},
                臺南: {lng: 120.2513, lat: 23.1417},
                彰化: {lng: 120.4818, lat: 23.99297},
                屏東: {lng: 120.62, lat:22.54951},
                雲林: {lng: 120.3897, lat: 23.75585},
                苗栗: {lng: 120.9417, lat: 24.48927},
                嘉義: {lng: 120.574, lat: 23.45889},
                新竹: {lng: 121.6739, lat: 24.91571},
                南投: {lng: 120.9876, lat: 23.83876},
                宜蘭: {lng: 121.7195, lat: 24.69295},
                基隆: {lng: 121.7081, lat: 25.10898},
                花蓮: {lng: 121.3542, lat: 23.47545},
                臺東: {lng: 120.9876, lat: 22.98461},
                金門: {lng: 118.3186, lat: 24.43679},
                澎湖: {lng: 119.6151, lat: 23.56548},
                連江: {lng: 119.5397, lat: 26.19737},
            },
            markerOptions: {
                url: mapMarker,
                scaledSize: {
                    width: 30,
                    height: 40,
                    f: 'px',
                    b: 'px',
                },
            },

            map: null,
            Mycoordinates: {
                lat: 24.7934952,
                lng: 120.99157909999998
            },
            markers:[],
            userId:'iddddd',
            UserName:'nameeee',
        };
    },
    created() {
        if (this.place!=undefined){
            this.Mycoordinates.lat = this.mapLatlng[this.place].lat;
            this.Mycoordinates.lng = this.mapLatlng[this.place].lng;
        }
        else if (this.position!=undefined){
            this.Mycoordinates.lat = this.position.lat;
            this.Mycoordinates.lng = this.position.lng;
        }

        var liffID = '1655093786-Joa47Erb';
        window.liff.init({
        liffId: liffID
        })
        .then(()=> {
        console.log('LIFF init');

        if (!window.liff.isLoggedIn()) {
            alert('not login')
        }
        else{
            window.liff.getProfile()
            .then((profile)=>{
            this.lineId = profile.userId;
            this.UserName = profile.displayName;
            alert(this.UserName)
            this.addFriend();
            });
        }
        });
        this.needMarker()
    },
    mounted() {
        //add the map to a data object
        this.$refs.mapRef.$mapPromise.then(map => this.map = map);
    },
    computed: {
        Mapcoordinates() {
            if (!this.map) {
                return {
                    lat: 0,
                    lng: 0
                };
            }
            return {
                lat: this.map.getCenter().lat(),
                lng: this.map.getCenter().lng()
            }
        },
    },
    methods: {
        async addFriend(){
            var res = await this.$http.get('addFriend?project_id='+this.projectId+'&friendId='+this.userId+'&friendName='+this.UserName)
            console.log(res);
            this.friends_list = res.data.friends_list.friends;
            console.log(this.friends_list);
            alert(this.friends_list[1].friendName)
            alert(this.friends_list[1].friendName)
        },
        async needMarker() {
            var res = await this.$http.get('getAllAlbums?project_id='+this.projectId);
            console.log(res)
            let leng = res.data.album.length;
            for (let i = 0; i < leng; i++) {
                const getMarkerAndAdd = {
                    lat: parseFloat(res.data.album[i].latlon.lat),
                    lng: parseFloat(res.data.album[i].latlon.lng)
                }
                this.markers.push({
                    position: getMarkerAndAdd,
                    label: {
                        text: res.data.album[i].place,
                        color: "#005757",
                        fontFamily: "SexChinese",
                        fontSize: "14px",
                        fontWeight: "bolder",
                    }
                })
            }
        },
        createAlbum(){
            this.$router.push({ path: '/createalbum', query: {project_id:this.projectId, position:this.Mapcoordinates}})
        },
        getImagesRes() {
            console.log("getImages");
            this.$router.push({ path: '/updatealbum', query: {project_id:this.projectId, position:this.markers[0].position}})
            console.log(this.markers[0].position.lat);
        },

        bill() {
            this.$router.push({ path:'/bookkeeping', query: {project_id:this.projectId,friends:this.friends_list}})
        },
    },
}
</script>

<style>
@font-face {
    font-family: "SexChinese";
    src: url('../fonts/cwTeXYen-zhonly.woff')format('woff'),
        url('../fonts/cwTeXYen-zhonly.ttf')format('truetype'),
        url('../fonts/cwTeXYen-zhonly.eot')format('embedded-opentype');
}

.fab-main-container {

    position: fixed;
    z-index: 5;
    margin-inline-end: 850px;
    bottom: 10%;
    overflow: initial;
    box-sizing: border-box;
}

.gm-style div div div div {
    margin-top: 3px;
    margin-bottom: -70px;
    text-shadow: 0.1em 4px 4px #CAFFFF;
    text-align: right;
}

.gm-style div div div {
    margin-top: -10px;
}

.bt {
    background: none;
    border: none;
    position: fixed;
    bottom: 100px;
    left: 50px;
    z-index: 5;
    border-radius: 50%;
}
</style>
