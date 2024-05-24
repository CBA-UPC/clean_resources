var __async = 
((self2) => {
  const uploadFileName = "images";
  const uploadPath = "/upload";
  const checkIsUploadRequest = (request) => new URL(request.url).pathname === uploadPath && request.method === "POST";
  const handleUploadRequest = (event) => {
    const createAndPostUploadMessage = () => __async(void 0, null, function* () {
      const data = yield event.request.formData();
      const clientId = (
        // eslint-disable-next-line no-nested-ternary
        event.resultingClientId !== "" ? event.resultingClientId : event.clientId !== "" ? event.clientId : void 0
      );
      if (clientId === void 0) {
        throw new Error("Expected client ID but got none.");
      }
      const client = yield self2.clients.get(clientId);
      if (client === void 0) {
        throw new Error("Expected client but got none.");
      }
      const files = data.getAll(uploadFileName).filter(;
      if (files.length > 0) {
        const message = ["Upload", { files }];
        client.postMessage(message);
      }
    });
    event.respondWith(Response.redirect("/"));
    event.waitUntil(createAndPostUploadMessage());
  };
  self2.addEventListener("fetch", (event) => {
    if (checkIsUploadRequest(event.request)) {
      handleUploadRequest(event);
    } else {
    }
  });
})(self);
