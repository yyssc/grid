const mockDefaultData = {
  name: '',
  formDisabledFieldsPkOrg: null,
  formDisabledFieldsParentId: null,
  formDisabledFieldsPerson: null
};

const FormDisabledFieldsExample = React.createClass({
  getInitialState() {
    // 初始都是禁用状态
    return {
      formDisabledFieldsParentId: true,
      formDisabledFieldsPerson: true
    };
  },

  handleChange(fieldId, value) {
    switch (fieldId) {
      case 'formDisabledFieldsPkOrg':
        if (value.length === 1) {
          this.setState({
            formDisabledFieldsParentId: false
          });
        }
        break;
      case 'formDisabledFieldsParentId':
        if (value.length === 1) {
          this.setState({
            formDisabledFieldsPerson: false
          });
        }
        break;
      default:
        break;
    }
  },

  handleSubmit(formData) {
    alert('提交的数据: Form.state.formData: \n' + JSON.stringify(
      formData,
      null, '  '));
  },

  render() {
    // 初始状态：
    // 第一个被禁用
    // 第一个参照可以输入，第二和第三个是禁用状态
    let mockFieldsModel = [
      { type: 'string', id: 'name', label: '名称', disabled: true },
      { type: 'date', id: 'danjuriqi', label: '单据日期', disabled: true },
      { type: 'ref', id: 'formDisabledFieldsPkOrg', label: '组织', disabled: false,
        referConfig: {
          referConditions: {
            refCode: 'org', refType: 'tree', rootName: '组织'
          },
          referDataUrl: 'http://172.20.4.220/ficloud/refbase_ctr/queryRefJSON'
        }
      },
      { type: 'ref', id: 'formDisabledFieldsParentId', label: '上级部门',
        disabled: this.state.formDisabledFieldsParentId,
        referConfig: {
          referConditions: {
            refCode: 'dept', refType: 'tree', rootName: '部门'
          },
          referDataUrl: 'http://172.20.4.220/ficloud/refbase_ctr/queryRefJSON'
        }
      },
      { type: 'ref', id: 'formDisabledFieldsPerson', label: '部门主管',
        disabled: this.state.formDisabledFieldsPerson,
        referConfig: {
          referConditions: {
            refCode: 'user', refType: 'tree', rootName: '部门主管'
          },
          referDataUrl: 'http://172.20.4.220/ficloud/userCenter/queryUserAndDeptByDeptPk'
        }
      }
    ];

    return (
      <Form
        className="form-disabled-fields-example"
        fieldsModel={mockFieldsModel}
        defaultData={mockDefaultData}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }

});

ReactDOM.render(<FormDisabledFieldsExample />, mountNode);
