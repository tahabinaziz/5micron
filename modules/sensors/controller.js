const db = require("../../models");
const Sensors = db.Sensors;

/*Business Logic*/

/*Create Sensor Record*/
exports.create = async (req, res) => {
  try {
    let { serial, swVersion, temperature, date, gps } = req.body;
    if (!serial || !swVersion || !date || !temperature || !gps) {
      return res.status(400).json({ message: "Field Empty" + error.message });
    }
    const serialExist = await Sensors.findOne({
      where: { serial: serial },
    });
    if (serialExist) {
      return res
        .status(400)
        .json({ message: `Serial: ${serial} already exists` });
    }

    let sensorPayload = {
      serial,
      swVersion,
      temperature,
      date,
      gps,
    };

    await Sensors.create(sensorPayload);
    return res.status(200).json(sensorPayload);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

/*Get All Sensor Records*/
exports.getAll = async (req, res) => {
  try {
    let record = await Sensors.findAll({});
    return res.status(200).json({ record });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

/*Get Sensor Records By Id*/
exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    let record = await Sensors.findOne({ where: { id: id } });
    if (record != null) {
      return res.status(200).json({ record });
    }
    return res.status(404).json({ message: "No Record Found" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { serial, swVersion, temperature, date, gps } = req.body;
    const id = req.params.id;

    let updateRecord = await Sensors.findOne({
      where: { id: id },
    });
    if (updateRecord != null) {
      await Sensors.update(
        {
          serial: serial,
          swVersion: swVersion,
          temperature: temperature,
          date: date,
          gps: gps,
        },
        { where: { id: id } }
      );
      return res.status(404).json({ message: "Record Update Successfully" });
    }
    return res.status(404).json({ message: "No Record Found" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

/*Delete Sensor*/
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    let record = await Sensors.findOne({
      where: { id: id },
    });

    if (record) {
      await Sensors.destroy({
        where: { id: id },
      });
      return res.status(200).json({
        message: "Record Delete Successfully",
      });
    }
    return res.status(404).json({
      message: "Record Not Found",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
