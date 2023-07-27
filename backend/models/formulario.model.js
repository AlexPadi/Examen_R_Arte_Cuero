module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            email: String,
            consulta: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Formulario = mongoose.model("formulario", schema);
    return Formulario;
};