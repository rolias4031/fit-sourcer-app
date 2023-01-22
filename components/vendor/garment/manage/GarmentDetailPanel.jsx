import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useGetGarmentDetail } from '../../../../lib/vendor/queries';
import IsLoading from '../../../util/IsLoading';
import IsError from '../../../util/IsError';
import GarmentDetailCard from './GarmentDetailCard';
import GarmentDetailButtons from './GarmentDetailButtons';

function GarmentDetailPanel({ garmentId }) {
  const { data, status } = useGetGarmentDetail(garmentId);
  const [editMode, setEditMode] = useState(false);

  if (status === 'loading') {
    return <IsLoading />;
  }

  if (status === 'error') {
    return <IsError />;
  }

  return (
    <div className="m-5 basis-1/2">
      <div className="flex">
        <GarmentDetailButtons editMode={editMode} setEditMode={setEditMode} />
      </div>
      <GarmentDetailCard
        garment={data.garment}
        styles={{ wrapper: 'border border-blue-500 w-full' }}
        editMode={editMode}
      />
    </div>
  );
}

GarmentDetailPanel.propTypes = {
  garmentId: PropTypes.string.isRequired,
};

export default GarmentDetailPanel;
