import interconnect from "@system.interconnect";

function splitBySemi(text){
    return text.split(';')
}

export default {
    data: {
        title: "None yet",
        image: "/common/left_arrow.png",
        connect: interconnect.instance(),
    },
    onInit(){
        this.connect.onmessage = (data) => {
            let msg = data.data;
            let msgArr = splitBySemi(msg);
            this.title = msgArr[1];
            if(msgArr[0] == "left"){
                this.image = "/common/left_arrow.png";
            } else if (msgArr[0] == "right"){
                this.image = "/common/right_arrow.png";
            }
        }
    }
}