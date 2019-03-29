import service from "@/plugins/axios";

const permission = {
  createFrontRole: params => {
    return setOptions({
      url: "/createFrontRole",
      data: params
    });
  }
};

function setOptions(option) {
  return service({
    ...option,
    method: "get"
  });
}

export default permission;
