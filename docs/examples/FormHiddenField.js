const mockFieldsModel = [
  {type: 'hidden', id: 'id', label: '主键'},
  {type: 'string', id: 'danjubianhao', label: '单据编号'},
  {type: 'hidden', id: 'name2', label: '名称2'},
  {type: 'hidden', id: 'name3', label: '名称3'},
  {type: 'hidden', id: 'name4', label: '名称4'},
  {type: 'double', id: 'jine', label: '金额'},
  {type: 'date', id: 'danjuriqi', label: '单据日期'},
  {type: 'boolean', id: 'qiyong', label: '启用'}
];

const mockFormData = {
  id: '22EA0EB9-FABA-4224-B290-4D041A1DF773',
  danjubianhao: 'abc123',
  name2: '名称2',
  name3: '名称3',
  name4: '名称4',
  jine: '12.00',
  danjuriqi: new Date('2017-02-14').toISOString(),
  qiyong: false
};

const FormHiddenFieldExample = React.createClass({
  getInitialState() {
    return {
      formData: {}
    };
  },

  handleBlur(/* index, fieldModel, value */) {
  },

  handleChange(fieldId, value) {
    const newState = { ...this.state };
    newState.formData[fieldId] = value;
    this.setState(newState);
  },

  handleSubmit(formData) {
    alert('提交的数据: Form.state.formData: \n' + JSON.stringify(
      formData,
      null, '  '));
  },

  handleReset(/* event */) {
  },

  render() {
    return (
      <Form
        fieldsModel={mockFieldsModel}
        defaultData={mockFormData}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onBlur={this.handleBlur}
        onReset={this.handleReset}
      />
    );
  }

});

ReactDOM.render(<FormHiddenFieldExample />, mountNode);
