



//Controllers--------------------------------------------------->
exports.getData = async (req, res) => {
    try {
        res.status(200).json({
            data: "hello from the server......"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        });
    }
}