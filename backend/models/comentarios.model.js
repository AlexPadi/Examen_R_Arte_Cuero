module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            email: String,
            comment: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Comentario = mongoose.model("comentario", schema);
    return Comentario;
};